import { useState } from "react";
import { useNavigate } from "react-router-dom";

const CreateBlog = ({ blogs }) => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [author, setAuthor] = useState('kimcoding');
  const navigate = useNavigate();



  const handleSubmit = (e) => {
    e.preventDefault();
    /* 등록 버튼을 누르면 게시물이 등록이 되며 home으로 리다이렉트 되어야 합니다. */
    /* 작성한 내용과 useNavigate를 이용하여 handleSubmit의 로직을 작성해보세요. */
    const data = { title, body, author, likes: 0, id: blogs[blogs.length - 1].id + 1 };

    console.log(e.type);
    setTimeout(() => {
      fetch(`http://localhost:3001/blogs/`, {
        method: "POST",
        headers: { "Content-type": "Application/json" },
        body: JSON.stringify(data)
      })
        .then(res => {
          if (!res.ok) {
            throw Error('could not fetch the data for that resource');
          }
          return res.json();
        })
        .then(() => {
          navigate('/')
          window.location.reload();
        })
        .catch(err => {
          console.error("Error", err);
        })
    }, 1000);
  }

  return (
    <div className="create">
      <h2>Add a New Blog</h2>
      <form onSubmit={handleSubmit}>
        <label>제목</label>
        <input
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="제목을 입력해주세요."
        />
        <label>내용</label>
        <textarea
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
          placeholder="내용을 입력해주세요."
        ></textarea>
        <label>작성자</label>
        <select
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        >
          <option value="kimcoding">김코딩</option>
          <option value="parkhacker">박해커</option>
        </select>
        <button>등록</button>
      </form>
    </div>
  );
}

export default CreateBlog; 