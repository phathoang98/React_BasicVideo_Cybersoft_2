const stateDefault = {

    // Tìm image avartar ramdom --> copy link

    comments: [
        { name: 'Yone', content: 'Hi! everybody', avatar: `https://i.pravatar.cc/60?u=yone` },
        { name: 'Yasuo', content: 'Hi! brother', avatar: `https://i.pravatar.cc/60?u=yasuo` }
    ]
}

const FakeBookReducer = (state = stateDefault, action) => {

    switch (action.type) {

        case "ADD_COMMENT": {

            state.comments = [...state.comments, action.userComment]
            return { ...state }
        }
    }

    return { ...state }
}

export default FakeBookReducer