namespace Entities.Models
{
    public class Story
    {
        public int Id { get; set; }

        public int FeatureId { get; set; }
        public string Title { get; set; }
        public Feature Feature { get; set; }
        public string Description { get; set; }
        public string AcceptanceCriteria { get; set; }
    }
}
