import "./style.css"
function ACHCheckboxReporting() {
  return (
    <div className="checkbox-container checkbox-report">
    <div>
      <input type="checkbox" name="ACHReport" />
      <label>ACH Reporting</label>
    </div>
    <div className="ACHCheckbox-item">
      <div className="checkbox-items">
        <div className="item">
          <input type="checkbox" name="Returns&NOCS" />
          <label>Returns&NOCS</label>
        </div>
        <div className="item">
          <input type="checkbox" name="Returns Only" />
          <label>Returns Only</label>
        </div>
        <div className="item">
          <input type="checkbox" name="NOCS Only" />
          <label>NOCS Only</label>
        </div>
        <div className="item">
          <input type="checkbox" name="EDI" />
          <label>EDI</label>
        </div>
        <div className="item">
          <input type="checkbox" name="NACHA" />
          <label>NACHA</label>
        </div>
      </div>
      <div className="checkbox-items">
        <div className="item">
          <input type="checkbox" name="XLS" />
          <label>XLS</label>
        </div>
        <div className="item">
          <input type="checkbox" name="Online Retrival" />
          <label>Online Retrival</label>
        </div>
        <div className="item">
          <input type="checkbox" name="Email Attachment" />
          <label>Email Attachment</label>
        </div>
        <div className="item">
          <input type="checkbox" name=".CSV" />
          <label>.CSV</label>
        </div>
        <div className="item">
          <input type="checkbox" name="PDF" />
          <label>PDF</label>
        </div>
      </div>
    </div>
  </div>
  );
}

export default ACHCheckboxReporting;
