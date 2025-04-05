using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Structure.ASO;

namespace WebApi.Controllers
{
    [Route("api/aso")]
    [ApiController]
    public class ASOController : ControllerBase
    {
        private readonly IASOParser _asoParser;

        public ASOController(IASOParser asoParser)
        {
            _asoParser = asoParser;
        }

        [HttpGet("parse")]
        public async Task<IActionResult> Parse([FromQuery] string input)
        {
            if (string.IsNullOrEmpty(input))
            {
                return BadRequest("Input cannot be null or empty.");
            }

            try
            {
                var results = new List<ASOModel>();
                await foreach (var item in _asoParser.Parse(input))
                {
                    results.Add(item);
                }

                if (results.Count == 0)
                {
                    results.Add(new ASOModel { Name = "No results found." });
                }
                return Ok(results);
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Internal server error: {ex.Message}");
            }
        }

        [HttpGet("article")]
        public async Task<IActionResult> ParseArticle([FromQuery] string url)
        {
            if (string.IsNullOrEmpty(url))
            {
                return BadRequest("URL cannot be null or empty.");
            }

            try
            {
                var result = await _asoParser.ParseArticle(url);
                return Ok(result);
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Internal server error: {ex.Message}");
            }
        }
    }
}