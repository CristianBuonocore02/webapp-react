import React, { useEffect, useState } from "react";

const Reviews = ({ movieId }) => {
    const [reviews, setReviews] = useState([]);
    const [formData, setFormData] = useState({ name: "", text: "", vote: "", });

    // Carica recensioni appena carica o cambia movieId
    useEffect(() => {
        fetch(`http://localhost:3030/api/movies/${movieId}/reviews`)
            .then((res) => res.json())
            .then((data) => setReviews(data));
    }, [movieId]);

    // Gestisce input form
    const handleChange = (e) => {
        const { id, value } = e.target;
        console.log(id)
        console.log(value)
        console.log({ ...formData, [id]: value })
        setFormData((prev) => ({ ...prev, [id]: value }));
    };

    // Invio form
    const handleSubmit = (e) => {
        // e.preventDefault();

        fetch(`http://localhost:3030/api/movies/${movieId}/reviews`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData),
        })
            .then((res) => res.json())
            .then((newReview) => {
                // Aggiunge recensione appena creata in cima alla lista
                setReviews((prev) => [newReview, ...prev]);
                setFormData({ name: "", text: "", vote: "" }); // resetta form
            });
    };

    return (
        <div className="container my-5">
            <h2 className="mb-4">Recensioni</h2>

            {/* Lista recensioni */}
            {reviews.map((r) => (
                <div className="card mb-3" key={r.id}>
                    <div className="card-body">
                        <h5 className="card-title">{r.name}</h5>
                        <h6 className="card-subtitle mb-2 text-muted">Voto: {r.vote}</h6>
                        <p className="card-text">{r.text}</p>
                    </div>
                </div>
            ))}

            {/* Form inserimento recensione */}
            <div className="card mt-4">
                <div className="card-body">
                    <h5 className="card-title">Aggiungi una recensione</h5>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">Nome utente</label>
                            <input
                                id="name"
                                name="name"
                                type="text"
                                className="form-control"
                                placeholder="Inserisci il tuo nome"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="vote" className="form-label">Voto</label>
                            <input
                                id="vote"
                                name="vote"
                                type="number"
                                className="form-control"
                                min="1"
                                max="5"
                                value={formData.vote}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="text" className="form-label">Recensione</label>
                            <textarea
                                id="text"
                                name="text"
                                className="form-control"
                                rows="4"
                                placeholder="Scrivi la tua recensione"
                                value={formData.text}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <button type="submit" className="btn btn-primary">Aggiungi recensione</button>
                    </form>
                </div>
            </div>
        </div>

    );
};

export default Reviews;
