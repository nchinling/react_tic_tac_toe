import './styles/Square.css'

export default function Square({ value, onSquareClick }) {

    return (
        <>
            <button className="squareButton" onClick={onSquareClick}>{value}</button>
        </>
    )
}