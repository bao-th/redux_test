import CountUI from "../../components/Count";
import {
    createIncrementAction,
    createDecrementAction,
    createIncrementAsyncAction
} from '../../redux/count_action'

//引入connect用于连接UI组件与redux
import { connect } from 'react-redux'

// a函数返回的对象中的key就作为传递给UI组件props的key，
// value就作为传递给UI组件props的value-----状态
// const mapStateToProps = state => ({ count: state })

// b函数返回的对象中的key就作为传递给UI组件props的key，
// value就作为传递给UI组件props的value-----操作状态的方法
// const mapDispatchToProps = dispatch => ({
//     // 通过redux执行加法
//     jia: number => dispatch(createIncrementAction(number)),
//     jian: number => dispatch(createDecrementAction(number)),
//     jiaAsync: (number, time) => dispatch(createIncrementAsyncAction(number, time))
// })

// 使用connect()()创建并暴露一个Count的容器组件
// export default connect(mapStateToProps, mapDispatchToProps)(CountUI)
export default connect(
    // mapStateToProps的写法
    state => ({ count: state }),

    // mapDispatchToProps的一般写法
    // dispatch => ({
    //     jia: number => dispatch(createIncrementAction(number)),
    //     jian: number => dispatch(createDecrementAction(number)),
    //     jiaAsync: (number, time) => dispatch(createIncrementAsyncAction(number, time))
    // })

    //mapDispatchToProps的简写
    {
        jia: createIncrementAction,
        jian: createDecrementAction,
        jiaAsync: createIncrementAsyncAction
    }

)(CountUI)