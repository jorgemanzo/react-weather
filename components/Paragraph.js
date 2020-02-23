const Paragraph = (props) => (
  <div className="paragraph">
    <p>{props.children}</p>
    <style jsx>
      {`
        .paragraph {
          font-size: 14pt;
        }
      `}
    </style>
  </div>
)
export default Paragraph
