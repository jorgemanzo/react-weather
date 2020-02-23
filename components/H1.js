const H1 = (props) => (
  <div className="H1">
    {props.children}
    <style jsx>
      {`
        .H1 {
          font-weight: bold;
          font-size: 20pt;
          margin-top: 20px;
          margin-bottom: 10px;
        }
      `}
    </style>
  </div>
)

export default H1
