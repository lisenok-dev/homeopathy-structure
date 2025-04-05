using Structure.ASO;

class Program
{
    static async Task Main(string[] args)
    {
        var ASOParser = new ASOParser();

        var result = await ASOParser.ParseArticle("https://aso.in.ua/boron-metallicum-mahesh-gandhi");
        Console.WriteLine(result);

          // var result = await ASOParser.Parse("[Aurum, abelmoschus, Palladium]").ToListAsync();
        await foreach (var model in ASOParser.Parse("Aurum, abelmoschus, Palladium"))
        {
            Console.WriteLine($"{model.Name} - {model.Url}");
        }
    }
}