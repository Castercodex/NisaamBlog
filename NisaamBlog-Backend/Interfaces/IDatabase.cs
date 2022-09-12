using NisaamBlog_Backend.Models;

namespace NisaamBlog_Backend.Interfaces
{
    public interface IDatabase<T>
    {
        IEnumerable<T> Get();
        T? Get(string id);
        bool Exists(string id);
        void Create(T id);
        void Delete(string id);
        void Update(string id, T entity);
        void Clear();
    }
}