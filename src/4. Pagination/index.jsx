import React, { Component } from 'react';
import TableItem from './tableItem';
import "./stylePagination.css"


var newsList = [
    {
        "id": "abc01",
        "title": "The Highs and Lows of Life as a Black Editor in Chief",
        "content": "ct1"
    },
    {
        "id": "abc02",
        "title": "The Real Reason Apple Wants You to Use Its Sign-in Service",
        "content": "ct2"
    },
    {
        "id": "abc03",
        "title": "Men Need To Think More About Fertility",
        "content": "ct3"
    },
    {
        "id": "abc04",
        "title": "Reactive Streams and Kotlin Flows",
        "content": "ct4"
    },
    {
        "id": "abc05",
        "title": "The Incredible Creative Power of the Index Card",
        "content": "ct5"
    },
    {
        "id": "abc06",
        "title": "The Man Who Helped the Beatles Admit It’s Getting Better",
        "content": "ct6"
    },
    {
        "id": "abc07",
        "title": "Facebook Can Resolve Its Issues — How Will We Resolve Ours?",
        "content": "ct7"
    },
    {
        "id": "abc08",
        "title": "The Personal Newsletter Fad Needs to End",
        "content": "ct8"
    },
    {
        "id": "abc09",
        "title": "How Do You Know You Have a Good Idea?",
        "content": "ct9"
    },
    {
        "id": "abc10",
        "title": "Ronaldo & Messi",
        "content": "ct10"
    },

    {
        "id": "abc11",
        "title": "How Do You Know You Have a Good Idea?",
        "content": "ct6"
    },
    {
        "id": "abc12",
        "title": "The Man Who Helped the Beatles Admit It’s Getting Better",
        "content": "ct7"
    },
    {
        "id": "abc13",
        "title": "The Personal Newsletter Fad Needs to End",
        "content": "ct8"
    },
    {
        "id": "abc14",
        "title": "Facebook Can Resolve Its Issues — How Will We Resolve Ours?",
        "content": "ct9"
    },
    {
        "id": "abc15",
        "title": "The Personal Newsletter Fad Needs to End",
        "content": "ct10"
    }
]


class Pagination extends Component {

    constructor() {
        super();

        this.state = {
            currentPage: 1, // Trang mặc định hiện ra từ ban đầu 

            newsPerPage: 5  // Số thông tin hiện trên mỗi trang , giá trị là TỔNG các dòng tin 
        };
    }

    /**
     *  ------- NÚT CHỌN TRANG 1, 2, 3 .....
     */

    chosePage = (event) => {
        this.setState({
            currentPage: Number(event.target.id)
        });
    }


    render() {
        const currentPage = this.state.currentPage;
        const newsPerPage = this.state.newsPerPage;

        /*
         *  - CHỈ SỐ của dòng thông tin "cuối cùng" trong mỗi trang hiện hành
         *      --> ( Số trang đang đứng * tổng các dòng thông tin của trang đang đứng )
         */
        const indexOfLastNews = currentPage * newsPerPage;

        /**
         *  - CHỈ SỐ của dòng thông tin "Đầu tiên" trong mỗi trang hiện hành
         *      --> ( CHỈ SỐ của dòng thông tin Cuối Cùng - tổng các dòng thông tin của trang đang đứng )
         */
        const indexOfFirstNews = indexOfLastNews - newsPerPage;


        /**
         *   --- Dùng HÀM slice( vị trí BẮT ĐẦU truy xuất, vị trí KẾT THÚC ) 
         *      xuất ra 1 mảng mới thỏa điều kiện để RENDER DỮ LIỆU CHO MỖI PAGE
         */

        const currentTodos = newsList.slice(indexOfFirstNews, indexOfLastNews);

        console.log(currentPage);
        // -- TỪ mảng mới ở trên ta duyệt và render
        const renderTodos = currentTodos.map((todo, index) => {
            return (
                <TableItem
                    stt={index + 1 + (currentPage - 1) * newsPerPage}
                    key={index}
                    data={todo} />
            )

        });

        /**
         *  --- RENDER RA SỐ TRANG
         * 
         *      + Hàm Math.ceil giúp làm tròn số Trang  
         */

        const pageNumbers = [];
        for (let i = 1; i <= Math.ceil(newsList.length / newsPerPage); i++) {

            pageNumbers.push(i);
        }

        return (
            <div className="container mt-5">

                <table className="table">
                    <thead>
                        <tr>
                            <th>STT</th>
                            <th>Title</th>
                        </tr>
                    </thead>

                    <tbody>
                        {renderTodos}
                    </tbody>
                </table>


                <div className="pagination-custom">
                    <ul id="page-numbers">
                        {
                            pageNumbers.map(number => {
                                // -- Nếu trang hiện hành === số Trang --> Active 
                                if (this.state.currentPage === number) {
                                    return (
                                        <li key={number} id={number} className="active">
                                            {number}
                                        </li>
                                    )
                                }
                                else {
                                    return (
                                        <li key={number} id={number} onClick={this.chosePage} >
                                            {number}
                                        </li>
                                    )
                                }
                            })
                        }
                    </ul>
                </div>
            </div>
        );
    }
}

export default Pagination;


// ---------- Để tạm vì chưa dùng tới 


// select = (event) => {
//     this.setState({
//         newsPerPage: event.target.value
//     })
// }


{/* <div className="news-per-page">
         <select defaultValue="0" onChange={this.select} >
                <option value="0" disabled>Get by</option>
                <option value="3">3</option>
                <option value="5">5</option>
                <option value="7">7</option>
         </select>
</div> */}