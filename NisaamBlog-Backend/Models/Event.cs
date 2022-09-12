namespace NisaamBlog_Backend.Models
{
    public class Event
    {
        public string? Name { get; set; }
        public string? Description { get; set; }
        public bool HasEnded { get; set; }
        public DateTime? DateCreated { get; set; }
        public DateTime? Time { get; set; }
    }
}
