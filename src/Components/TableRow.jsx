export default function TableRow(props) {
    return (
      <td>
        <a href="https://example.com">
          <div>{props.number}</div>
        </a>
      </td>
    );
  }