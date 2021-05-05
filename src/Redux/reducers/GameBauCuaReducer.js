
/**
 *  -------- REDUCER : chứa các State của các Component sẽ thay đổi dữ liệu ra giao diện
 *    rxre : snippets tạo reducer
 */

const initialState = {

    // --- Danh Sách Cược 

    danhSachCuoc: [
        { ma: 'ga', hinhAnh: './img/GameBauCua/ga.png', diemCuoc: 0 },
        { ma: 'bau', hinhAnh: './img/GameBauCua/bau.png', diemCuoc: 0 },
        { ma: 'ca', hinhAnh: './img/GameBauCua/ca.png', diemCuoc: 0 },
        { ma: 'nai', hinhAnh: './img/GameBauCua/nai.png', diemCuoc: 0 },
        { ma: 'cua', hinhAnh: './img/GameBauCua/cua.png', diemCuoc: 0 },
        { ma: 'tom', hinhAnh: './img/GameBauCua/tom.png', diemCuoc: 0 },
    ],

    // --- Tiền thưởng ( ban đầu đc cho sẵn để đặt cược )

    tongDiem: 1000,

    // ----- Các xúc xắc được chọn 

    mangXucXac: [
        { ma: 'nai', hinhAnh: './img/GameBauCua/nai.png' },
        { ma: 'cua', hinhAnh: './img/GameBauCua/cua.png' },
        { ma: 'tom', hinhAnh: './img/GameBauCua/tom.png' },
    ]
}

export default (state = initialState, action) => {
    switch (action.type) {


        // ------ NÚT TĂNG GIẢM :

        case 'DAT_CUOC_BAU_CUA': {

            /**
             * -- Tìm trong danhSachCuoc => quân cược nào đc click sẽ tăng hoặc giảm điểm
             */

            // console.log("action", action); // check thử khi click có nhận đc action chưa 

            const danhSachCuocUpdate = [...state.danhSachCuoc]
            const index = danhSachCuocUpdate.findIndex(qc => qc.ma === action.quanCuoc.ma)

            if (index !== -1) { // khác -1 , có nghĩa là tồn tại 

                if (action.tangGiam) {  // tangGiam :true  

                    if (state.tongDiem > 0) { //và tiền thưởng phải > 0 mới bấm cược đc

                        danhSachCuocUpdate[index].diemCuoc += 100;
                        state.tongDiem -= 100 // trừ đi tiền đc cho sẵn ban đầu để đặt cược , sau mỗi lần click chọn quân cược 
                    }

                }
                else { // tangGiam: false 

                    if (danhSachCuocUpdate[index].diemCuoc > 0) { // lớn hơn 0 mới bấm trừ đc 
                        danhSachCuocUpdate[index].diemCuoc -= 100;
                        state.tongDiem += 100
                    }
                }
            }

            state.danhSachCuoc = danhSachCuocUpdate

            return { ...state }
        }


        // ----------- "NÚT XỐC" CÁC QUÂN XÚC XẮC 

        case 'PLAY_GAME_BAU_CUA': {

            /**
             *  ------------ RENDER NGẪU NHIÊN 3 CON XÚC XẮC 
             */

            const mangXucXacNgauNhien = [];

            //  Dùng vòng lặp để duyệt và tạo ngẫu nhiên ra 3 con xúc xắc

            for (let i = 0; i < 3; i++) {
                // Tạo ra 1 số ngẫu nhiên từ 0 -> 5 , ứng với 5 phần tử của danhSachCuoc
                let soNgauNhien = Math.floor(Math.random() * 6);

                // Xúc xắc ngẫu nhiên sẽ đc lấy ra trong danhSachCuoc 
                const xucXacNgauNhien = state.danhSachCuoc[soNgauNhien]

                // Sau đó được thêm vào mangXucXacNgauNhien mới tạo
                mangXucXacNgauNhien.push(xucXacNgauNhien)

            }
            // Cập nhật lại mảng xúc xắc state.mangXucXac = mangXucXacNgauNhien
            state.mangXucXac = mangXucXacNgauNhien


            /**
             *  ------------- XỬ LÝ TĂNG ĐIỂM THƯỞNG
             */

            // Duyệt mảng xúc xắc ngẫu nhiên vừa đc random ra , duyệt cho cả 3 quân và so sánh với các quân cược 
            mangXucXacNgauNhien.forEach((xucXacNN, index) => {

                // Sau đó tìm "vị trí quân cược mà ta click" đặt cược
                //   so sánh có mấy quân giống trong các xúc xắc ngẫu nhiên vừa đc random

                let indexDSCuoc = state.danhSachCuoc.findIndex(qc => qc.ma === xucXacNN.ma)

                // Khi đã tìm xong rồi --> tăng điểm thưởng = cách lấy điểm cược của quân ta click + vào "tiền thưởng" ban đầu  

                if (index !== -1) {
                    state.tongDiem += state.danhSachCuoc[indexDSCuoc].diemCuoc
                }

            })

            /**
             *  -------------- XỬ LÝ HOÀN TIỀN Ở CÁC QUÂN CƯỢC KHI PLAY GAME XONG
             */

            // Duyệt Mảng danhSachCuoc để tìm ra quân cược được click 

            state.danhSachCuoc.forEach((qc, index) => {

                // Sau đó tìm vị trí các Xúc Xắc Ngẫu Nhiên trong mảng so sánh với các Quân Cược ở danhSachCuoc ta vừa ấn cược 
                let indexXucXacNN = mangXucXacNgauNhien.findIndex(xucXacNN => xucXacNN.ma === qc.ma)

                // Khi đã tìm xong
                if (indexXucXacNN !== -1) {

                    // Lấy điểm cược ở quân đó CỘNG vào cho tiền thưởng 
                    state.tongDiem += qc.diemCuoc
                }

            })

            // Duyệt mảng danhSachCuoc để Refresh lại tiền cược ở mỗi quân cược khi Play Game xong 

            state.danhSachCuoc = state.danhSachCuoc.map((qc, index) => {
                return { ...qc, diemCuoc: 0 }
            })

            return { ...state }

        }

        /**
         *  --------------- NÚT CHƠI LẠI 
         */

        case 'CHOI_LAI': {

            state.tongDiem = 1000;
            state.danhSachCuoc = state.danhSachCuoc.map((qc, index) => {
                return { ...qc, diemCuoc: 0 }
            })

            return { ...state }
        }

        default:
            return state
    }
}

