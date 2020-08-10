import React from "react";

import PageHeader from "../template/pageHeader";
import Form from "./todoForm";
import List from "./todoList";

export default props => (
  <div>
    <PageHeader name="Tarefas" small="Cadastro"></PageHeader>
    <Form />
    <List />
  </div>
);
