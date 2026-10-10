const Card = (props) => {
    return (
        // გქონდეთ ერთი დივ, width: 300px, height: 300px და საწყისი backgroundColor იყოს black

        // გქონდეთ ექვსი ცალი ღილაკი, yellow, red, green, blue, orange, brown და თითო ღილაკზე დაჭერისას უნდა შეიცვალოს div ის ფერი

        // ეს ფერი უნდა იყოს state, რომელსაც შეცვლით stateSetter ით, გამოიყენეთ useState hook ი
        <>
            <div>
                <h1>Title: {props.title}</h1>
                <h2>Price: {props.price}$</h2>
                <h2>Color: {props.color}</h2>
                <h2>Size: {props.size}</h2>
            </div>
            <hr />
        </>
    )
}

export default Card