namespace NisaamBlog_Backend.Models
{
    public class Article
    {
        public DateTime Date { get; set; }

        public string Author { get; set; } = string.Empty;

        public string Content { get; set; } = string.Empty;
    }
}