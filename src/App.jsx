import React from "react";
import MainLayout from "./layout/mainLayout";
import HomePage from "./page/HomePage";
import { Switch, Route } from "react-router";
import Class from "./page/Class";
import DaneshSara from "./page/daneshSara";
import Exam from "./page/exam";
import Zang from "./page/zang";

const App = () => {
  return (
    <MainLayout>
      <Switch>
        <Route component={Class} path="/class" />
        <Route component={DaneshSara} path="/daneshSara" />
        <Route component={Exam} path="/exam" />
        <Route component={Zang} path="/zang" />
        <Route component={HomePage} exact path="/" />
      </Switch>
    </MainLayout>
  );
};

export default App;
