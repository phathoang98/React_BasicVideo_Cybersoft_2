
import React from 'react';
import { useSpring, animated } from 'react-spring'

function UseSpring(props) {

    const propsAni = useSpring(
        { color: "green", from: { color: "red" }, config: { duration: 1000 } }
    )

    const propsAniNumber = useSpring(
        {
            num: 200, color: "red", from: { num: 10, color: 'black' },
            config: { duration: 3000 }
        }
    )

    const propsScroll = useSpring({ scroll: 100, from: { scroll: 0 } })


    return (
        <div>
            <h1>Change color text</h1>
            <animated.div style={propsAni}>
                useSpring
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis quasi temporibus aut, neque explicabo hic sed. Deleniti reiciendis nihil nobis error at, modi hic consequuntur suscipit eum! Itaque nostrum exercitationem, reiciendis cumque porro accusamus corrupti facilis a, vitae repudiandae iste commodi quisquam ullam aut voluptate temporibus beatae incidunt aspernatur quibusdam dolore sapiente autem illo nihil dignissimos. Assumenda recusandae hic iusto totam alias doloribus similique. Quos ad quis aperiam minima rerum, fuga natus suscipit assumenda commodi nemo vel ea obcaecati dignissimos doloribus doloremque repellendus aut, reprehenderit dicta beatae numquam eligendi quod sequi earum repudiandae! Culpa inventore recusandae iure facilis ad sint.
            </animated.div>

            <hr />

            <h1>Change Number</h1>
            <animated.h3 style={{
                color: propsAniNumber.color
            }}>
                {propsAniNumber.num}
            </animated.h3>

            <animated.p style={{
                fontSize: propsAniNumber.num.color
            }}>
                1
            </animated.p>

            <h1>Scroll</h1>
            <animated.p scrollTop={propsScroll.scroll}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta libero non, et repellendus sequi laudantium exercitationem saepe similique a cupiditate quia iure accusamus. Dolorem quasi beatae facere distinctio nulla rem molestias possimus, autem dolore porro eius debitis unde suscipit tempore animi doloremqdi eius! Consequuntur necessitatibus eius ullam ratione exercitationem non nobis illum perferendis quis atque praesentium harum quiate, fugit obcaecati dicta quidem labore exercitationem nihil nostrum ipsa inventore dolorum quo esse voluptates quis minima quia, atque pariatur soluta veniam tempore officiis? Soluta sit, iusto ipsa rem ex unde consectetur voluptatibus minus?
            </animated.p>

        </div>


    );
}

export default UseSpring;