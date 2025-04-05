namespace Structure.ASO
{
    public interface IASOParser
    {
        IAsyncEnumerable<ASOModel> Parse(string search);

        Task<string> ParseArticle(string url);
    }
}