import React from "react";

import {
  Columns,
  Column,
  Button,
  Table,
  Field,
  Control,
  Section,
  Container,
} from "src/bulma.js";

// OGLify React

const useState = React.useState;

// one liner classNames
const useClassNames = (a, b) => (b ? a + " " + b : a);

// const Heading = ({ rule }) => {
//   const { title, rules } = rules;
//   const [first, ...rest] = rules;
//   return (
//     <>
//       <p>
//         <b>{title + ": "}</b>
//         {first}
//       </p>
//       {rest.map((currentRule, i) => (
//         <p>{currentRule}</p>
//       ))}
//     </>
//   );
// };
//
// const Article = ({ rule }) => {
//   console.log(rule);
//   const { title, rules } = rule;
//
//   // const articleRule = (currentRule) => {
//   //   if (typeof currentRule === "string" || currentRule instanceof String) {
//   //     return <p>{currentRule}</p>;
//   //   } else if (currentRule.type == "heading") {
//   //     return <Heading heading={currentRule} />;
//   //   } else {
//   //     return "";
//   //   }
//   //   // else if (rule.type == "article") {
//   //   //   return articleRule(article);
//   //   // }
//   // };
//
//   return <>{rules.map(articleRule)}</>;
// };
//
// const Category = ({ title, rules }) => {
//   // display title
//   // create a source link
//   // go through rules array
//   // for each item in rules array
//   // if it is text, <p>
//   // if it is a section, <Section>
//   // if it is an article, <Article>
//   // if it is a heading, <Heading>
//   // copyright footer
//   // return
// };
//
// const Rules = (source) => {
//   // go through rules array
//   // for each item in rules array
//   // if it is text, <p>
//   // if it is a heading, <Heading>
//   // if it is an article, <Article>
//   // if it is a section, <Section>
//   // return
// };
//
// const Source = ({ source }) => {
//   return (
//     <>
//       <h1 className={"title"}>{source.title}</h1>
//       <ul>
//         <li>{"© " + source.copyright + " " + source.publisher}</li>
//         <li>{"Author(s): " + source.authors}</li>
//         <li>{"PZO" + source.pzo}</li>
//       </ul>
//     </>
//   );
// };

export const App = ({ ruleset }) => {
  console.log(ruleset);
  return (
    <Section>
      <Container>
        <Columns>
          <Column className={"content"}></Column>
        </Columns>
      </Container>
    </Section>
  );
};
