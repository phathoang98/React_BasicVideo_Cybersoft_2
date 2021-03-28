

/**
 *  ----- FILE THEME (set lại các thuộc tính mặc định tùy ý người dùng)
 * 
 *  --> Vào đây để lấy mã màu muốn dùng: https://www.materialpalette.com/
 */

// ---- Khởi tạo Theme 

import { createMuiTheme } from '@material-ui/core/styles';


// --- Set cho Theme 

const theme = createMuiTheme({

    color: {
        primary: "#D32F2F",
        secondary: "#00BCD4",
        error: "#E64A19",
        hello: "green"
    },

    shape: {
        borderRadius: 4,
        backgroundColor: "#7C4DFF",
        textColor: "#FFFFFF",
        border: "#CCCCCC"
    }
});

export default theme
