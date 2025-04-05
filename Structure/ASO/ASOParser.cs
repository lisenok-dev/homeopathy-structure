using System.Text.RegularExpressions;
using AngleSharp;
using AngleSharp.Dom;

namespace Structure.ASO
{
    public partial class ASOParser : IASOParser
    {
        private const int Attempts = 10;

        public async IAsyncEnumerable<ASOModel> Parse(string search)
        {
            var searchGroups = Regex.Replace(search, @"[\s\[\]]", "")
                                    .ToLower()
                                    .Split(',')
                                    .GroupBy(s => s[..1]); // Group by first character

            foreach (var group in searchGroups)
            {
                await foreach (var result in ParseDrug(group.Key, group))
                {
                    yield return result;
                }
            }
        }

        private static async IAsyncEnumerable<ASOModel> ParseDrug(string firstChar, IEnumerable<string> searchDrugs)
        {
            var url = $"https://aso.in.ua/gomeopaticheskie-preparaty/?q={firstChar}";
            var config = Configuration.Default.WithDefaultLoader();
            var context = BrowsingContext.New(config);

            var count = 0;
            do
            {
                IDocument document = await context.OpenAsync(url);

                if (document != null)
                {
                    var drugList = document.QuerySelector(".entry-content")?
                        .QuerySelectorAll("li")
                        .Select(drug => new { Drug = drug, Link = drug.QuerySelector("a") });

                    count = drugList?.Count() == 0 ? 0 : drugList?.Count() ?? 0;

                    if (count == 0) continue;

                    var asoModelList = drugList?
                        .Where(drug => searchDrugs.Any(s => drug.Link?.TextContent?.ToLower().Contains(s) ?? false))
                        .Select(drug => new ASOModel
                        {
                            Name = drug.Link?.TextContent ?? string.Empty,
                            Url = $"https://aso.in.ua{drug.Link?.GetAttribute("href") ?? string.Empty}",
                            Href = drug.Link?.GetAttribute("href") ?? string.Empty
                        });

                    if (asoModelList != null)
                    {
                        foreach (var model in asoModelList)
                        {
                            yield return model;
                        }
                    }
                }
            } while (count == 0);
        }

        [GeneratedRegex(@"[\s\[\]]")]
        private static partial Regex WordRegex();

        public async Task<string> ParseArticle(string url)
        {
            var config = Configuration.Default.WithDefaultLoader();
            var context = BrowsingContext.New(config);

            IDocument document = await context.OpenAsync(url);

            if (document != null)
            {
                var article = document.QuerySelector(".entry-content");
                var ads = article?.QuerySelectorAll("div.google-auto-placed");
                if (ads != null)
                {
                    foreach (var ad in ads)
                    {
                        ad.Remove();
                    }
                }
                return article?.InnerHtml ?? string.Empty;
            }
            else
            {
                return string.Empty;

            }
        }
    }
}