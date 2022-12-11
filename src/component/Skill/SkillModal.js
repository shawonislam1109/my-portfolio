import React from 'react';

const SkillModal = ({ data }) => {
    console.log(data.name)
    return (
        <div>

            <input type="checkbox" id="Skill-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative bg-white">
                    <label htmlFor="Skill-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-serif text-black">{data.name}</h3>
                    <p className="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
                </div>
            </div>
        </div>
    );
};

export default SkillModal;