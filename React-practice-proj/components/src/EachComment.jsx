import faker from 'faker';

const imgUrl = faker.image.avatar();
const authorName = faker.name.findName();
const date = faker.date.recent().toString();
const comment = faker.lorem.lines();

function EachComment() {
  return (
    <div className="ui container comments">
      <div className="comments">
        <a href="/" className="avatar">
          <img alt="avatar" src={faker.image.avatar()} />
        </a>
        <div className="content">
          <a href="/" className="author">
            {faker.name.findName()}
          </a>
          <div className="metadata">
            <span className="date">{date}</span>
          </div>
          <div className="text"> {comment}</div>
        </div>
      </div>
    </div>
  )
}

export default EachComment;
