
/**
 *  ------- File JSS (giống CSS trước đây: dùng để tạo style cho tag bất kỳ)
 * 
 *      Từ file này : --> file Theme để lấy giá trị muốn sử dụng
 * 
 */

const styles = (theme) => ({

    taskboard: {
        display: 'flex',
        alignItems: 'center',
    },

    shape: {
        padding: 20,
        margin: 10,
        background: theme.color.primary,
        color: theme.shape.textColor,
        fontWeight: "bold",
        borderColor: theme.shape.border,
        borderRadius: theme.shape.borderRadius
    }
})


export default styles