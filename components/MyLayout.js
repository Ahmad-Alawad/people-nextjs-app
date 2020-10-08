import Header from '../components/Header'

export default props => (
    <div>
        <Header />
        {props.children}
        <style jsx>{`
            color:red;
            font: 15px Helvetica, Arial, sans-serif;
            background: yellow;
            padding: 100px;
            text-align: center;
            transition: 100ms ease-in background;
        `}</style>
    </div>
)
