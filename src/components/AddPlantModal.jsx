import './AddPlantModal.css';

function AddPlantModal({ onClose }) {
    const handleSubmit = (event) => {
        event.preventDefault();
        onClose()
    }

    return (
        <div className="modal-backdrop">
            <section className="plant-modal" role="dialog" aria-modal="true">
                <div className="modal-header">
                    <h2>Add Plant</h2>
                    <button type="button" className="modal-close" onClick={onClose} aria-label="Close modal">
                        x
                    </button>
                </div>

                <form className="plant-modal-form" onSubmit={handleSubmit}>
                    <label>Plant Name</label>
                    <input type="text" name="plantName" required />

                    <div className="modal-actions">
                        <button type="submit" className="modal-save">Save</button>
                    </div>
                </form>
            </section>
        </div>
    )
}

export default AddPlantModal;