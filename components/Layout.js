import Header from './Header'

const Layout = props => (
  <div className="root">
    <Header />
    <div className="content">
      {props.children}
    </div>
    <style jsx global>
      {`
        .root {
          font-family: "Arial";
        }
        .content {
          margin-left: 20px;
          margin-right: 20px;
        }
      `}
    </style>
  </div>
)

export default Layout
