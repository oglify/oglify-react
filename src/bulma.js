// COMPONENTS

const Columns = ({ className, children }) => (
  <div className={useClassNames("columns", className)}>{children}</div>
);
const Column = ({ className, children }) => (
  <div className={useClassNames("column", className)}>{children}</div>
);
const Button = ({ className, children, onClick }) => (
  <a className={useClassNames("button", className)} onClick={onClick}>
    {children}
  </a>
);
const Table = ({ className, children }) => (
  <div className={useClassNames("table", className)}>{children}</div>
);
const Field = ({ className, children }) => (
  <div className={useClassNames("field", className)}>{children}</div>
);
const Control = ({ className, children }) => (
  <div className={useClassNames("control", className)}>{children}</div>
);
const Section = ({ className, children }) => (
  <div className={useClassNames("section", className)}>{children}</div>
);
const Container = ({ className, children }) => (
  <div className={useClassNames("container", className)}>{children}</div>
);

export { Columns, Column, Button, Table, Field, Control, Section, Container };
