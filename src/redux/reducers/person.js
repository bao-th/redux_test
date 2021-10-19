import { ADD_PERSON } from "../constant";

export default function personReducer(
  prevState = [{ id: "001", name: "tom", age: 18 }],
  action
) {
  const { type, data } = action;
  switch (type) {
    case ADD_PERSON:
      return [data, ...prevState];
    default:
      return prevState;
  }
}
