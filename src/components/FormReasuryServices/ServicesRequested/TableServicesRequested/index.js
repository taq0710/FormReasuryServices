import React, { useState } from "react";
import "./style.css";
import { BsPencil } from "react-icons/bs";
function Table() {
  const [data, setData] = useState([
    {
      type: "ACH Payroll",
      ItemLimit: "$500,000",
      DayLimit: "$500,000",
      MonthLimit: "$500,000",
      token: ">$10,000",
      dual: ">$10,000",
      NumberofApprovers: 1,
      button: <BsPencil />,
    },
    {
      type: "ACH Collections",
      ItemLimit: "$500,000",
      DayLimit: "$500,000",
      MonthLimit: "$500,000",
      token: ">$10,000",
      dual: ">$10,000",
      NumberofApprovers: 1,
      button: <BsPencil />,
    },
    {
      type: "ACH Batch",
      ItemLimit: "$500,000",
      DayLimit: "$500,000",
      MonthLimit: "$500,000",
      token: ">$10,000",
      dual: ">$10,000",
      NumberofApprovers: 1,
      button: <BsPencil />,
    },
    {
      type: "ACH EFTPS",
      ItemLimit: "$500,000",
      DayLimit: "$500,000",
      MonthLimit: "$500,000",
      token: ">$10,000",
      dual: ">$10,000",
      NumberofApprovers: 1,
      button: <BsPencil />,
    },
    {
      type: "ACH Recelpt",
      ItemLimit: "$500,000",
      DayLimit: "$500,000",
      MonthLimit: "$500,000",
      token: ">$10,000",
      dual: ">$10,000",
      NumberofApprovers: 1,
      button: <BsPencil />,
    },
  ]);

  const handleItemLimitChange = (event, type) => {
    const newData = data.map((item) => {
      if (item.type === type) {
        return { ...item, ItemLimit: event.target.value };
      }
      return item;
    });
    setData(newData);
  };

  const handleDayLimitChange = (event, type) => {
    const newData = data.map((item) => {
      if (item.type === type) {
        return { ...item, DayLimit: event.target.value };
      }
      return item;
    });
    setData(newData);
  };

  const handleMonthLimitChange = (event, type) => {
    const newData = data.map((item) => {
      if (item.type === type) {
        return { ...item, MonthLimit: event.target.value };
      }
      return item;
    });
    setData(newData);
  };
  const handletokenChange = (event, type) => {
    const newData = data.map((item) => {
      if (item.type === type) {
        return { ...item, token: event.target.value };
      }
      return item;
    });
    setData(newData);
  };
  const handledualChange = (event, type) => {
    const newData = data.map((item) => {
      if (item.type === type) {
        return { ...item, dual: event.target.value };
      }
      return item;
    });
    setData(newData);
  };
  const handleNumberofApproversChange = (event, type) => {
    const newData = data.map((item) => {
      if (item.type === type) {
        return { ...item, NumberofApprovers: event.target.value };
      }
      return item;
    });
    setData(newData);
  };
  const handleButtonClick = (type) => {
    const inputFields = document.querySelectorAll(
      `tr[data-type='${type}'] input`
    );
    if (inputFields && inputFields.length > 0) {
      inputFields[0].focus();
    }
  };

  return (
    <table>
      <thead>
        <tr>
          <th>Type</th>
          <th>Per Item Limit</th>
          <th>Per Day Limit</th>
          <th>Per Month Limit</th>
          <th>Requires Token</th>
          <th>Requires Dual Approval Amount</th>
          <th>Number of Approvers Required</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr key={item.type} data-type={item.type}>
            <td>{item.type}</td>
            <td>
              <input
                type="text"
                value={item.ItemLimit}
                onChange={(event) => handleItemLimitChange(event, item.type)}
              />
            </td>
            <td>
              <input
                type="text"
                value={item.DayLimit}
                onChange={(event) => handleDayLimitChange(event, item.type)}
              />
            </td>
            <td>
              <input
                type="text"
                value={item.MonthLimit}
                onChange={(event) => handleMonthLimitChange(event, item.type)}
              />
            </td>
            <td>
              <input
                type="text"
                value={item.token}
                onChange={(event) => handletokenChange(event, item.type)}
              />
            </td>
            <td>
              <input
                type="text"
                value={item.dual}
                onChange={(event) => handledualChange(event, item.type)}
              />
            </td>
            <td>
              <input
                type="text"
                value={item.NumberofApprovers}
                onChange={(event) =>
                  handleNumberofApproversChange(event, item.type)
                }
              />
            </td>
            <button onClick={() => handleButtonClick(item.type)}>
              {item.button}
            </button>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
