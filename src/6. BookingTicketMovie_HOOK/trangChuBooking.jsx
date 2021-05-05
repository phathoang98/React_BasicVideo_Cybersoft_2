import React from 'react';
import "./BookingTicketMovie.css";



function TrangChuBooking(props) {
    return (
        <div className="bookingMovie" style={{
            position: "fixed", width: '100%', height: 2000, backgroundSize: '100%'
        }}>
            <div style={{ position: 'fixed', width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,0.7)' }}>
                <div className="container-fluid">
                    <div className="row">

                        {/* ---------- MÀN HÌNH và HÀNG GHẾ ĐẶT VÉ */}

                        <div className="col-8 text-center">
                            <div className="text-warning" style={{ fontSize: '40px' }}>ĐẶT VÉ XEM PHIM CYBERSOFT</div>
                            <div className="mt-2 text-light" style={{ fontSize: '25px' }}>Màn hình</div>

                            <div className="mt-2"
                                style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                                <div className="screen"></div>

                            </div>
                        </div>

                        {/* -------- DANH SÁCH GHẾ BẠN CHỌN   */}

                        <div className="col-4">
                            <div style={{ fontSize: '35px' }} className="text-light mt-2">DANH SÁCH GHẾ BẠN CHỌN</div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TrangChuBooking;