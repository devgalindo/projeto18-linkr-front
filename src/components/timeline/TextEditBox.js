import styled from "styled-components";
import { useAuth } from "../../context/Context";
import { editPost } from "../../service/Service";
import { useState } from "react";

export default function TextEditBox(props) {
  const { postId, handleToggleEdit, previousText } = props;
  const { user } = useAuth();
  const { token } = user;

  console.log(previousText);
  const [form, setForm] = useState({ text: previousText });
  const [isDisable, setIsDisable] = useState(false);

  function handleForm(e) {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setIsDisable(true);

    if (!form.text) {
      setIsDisable(false);
      return alert("You have to comment something!");
    }

    editPost(`post/${postId}`, form, token)
      .then((res) => {
        setIsDisable(false);
        handleToggleEdit();
      })
      .catch((err) => {
        alert(e.response.data);
      });
  }

  return (
    <Form onSubmit={handleSubmit}>
      <input
        disabled={isDisable}
        type="text"
        name="text"
        value={form.text}
        onChange={handleForm}
      ></input>
    </Form>
  );
}

const Form = styled.form`
  input {
    width: 100%;
    margin-bottom: 15px;
    font-size: 17px;
    font-family: Lato, sans-serif;
    font-weight: 400;
    line-height: 130%;
    color: #b7b7b7;
  }
`;
