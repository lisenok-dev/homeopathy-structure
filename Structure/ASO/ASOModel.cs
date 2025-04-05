using AngleSharp.Dom;

namespace Structure.ASO
{
    public class ASOModel
    {
        public string Url { get; set; } = string.Empty;
        public required string Name { get; set; }
        public string Href { get; set; } = string.Empty;
    }
}