import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ThirdSecond.css';

const ThirdSecond = () => {
    return (
        <div className="p-5 text-center bg-color-home-2nd-page">
            {/* Section Title */}
            <h2 className="fw-bold mb-5">Why use <span className="text-warning">Gemini AI</span> in task maneger ?</h2>

            {/* Cards Section */}
            <div className="row justify-content-center">
                {/* Card 1 */}
                <div className="col-md-4 col-sm-6 mb-4">
                    <div className="card shadow p-3">
                        <div className="border border-danger">
                            <div className="icon-circle mx-auto">
                                <span className="badge bg-warning rounded-circle text-white">01</span>
                            </div>
                            <h5 className="fw-bold mt-4">Better Task Prioritization</h5>
                            <ul>
                                <li>Identify deadlines, keywords, and urgency</li>
                                <li>Suggest accurate priorities (High, Medium, Low) based on task description</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Card 2 */}
                <div className="col-md-4 col-sm-6 mb-4">
                    <div className="card shadow p-3">
                        <div className="border border-info">
                            <div className="icon-circle mx-auto mb-3">
                                <span className="badge bg-warning rounded-circle text-white">02</span>
                            </div>
                            <h5 className="fw-bold">Smart suggestions</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ThirdSecond;