export default function ListPokerGameComponent() {
    const game = {id:1,buyin:10, endNight: 20, netNight: 10}

    return (
        <div className="container">
            <h1>Poker Games</h1>
            <div className= "table">
                <table>
                    <thead>
                    <tr>
                        <td>id</td>
                        <td>buy in</td>
                        <td>end night</td>
                        <td>net night</td>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>{game.id}</td>
                        <td>{game.buyin}</td>
                        <td>{game.endNight}</td>
                        <td>{game.netNight}</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}