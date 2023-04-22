import "./style.css";
import { AiOutlineQuestionCircle } from "react-icons/ai";
function Header() {
  return (
    <div className="header-container">
      <div className="check-box">
        <div className="check-box-title">
          <p className="title">Request type</p>
          <AiOutlineQuestionCircle />
        </div>
        <div className="check-box-items">
          <div className="checkbox-item">
            <input type="checkbox" name="NewService" />
            <label for="NewService">New Service</label>
          </div>
          <div className="checkbox-item">
            <input type="checkbox" name="Maintainance" />
            <label for="Maintainance">Maintainance</label>
          </div>
          <div className="checkbox-item">
            <input type="checkbox" name="Remove" />
            <label for="Remove">Remove</label>
          </div>
        </div>
      </div>
      <div className="header-notes">
        <p className="header-notes-title">Interface Legend</p>
        <div className="notes-list">
          <div className="notes-list-item">
            <div className="new"></div>
            <div>
              Indicates <span>a new</span> Input
            </div>
          </div>
          <div className="notes-list-item">
            <div className="changed"></div>
            <div>
              Indicates <span>a field has changed</span>
            </div>
          </div>
          <div className="notes-list-item">
            <div className="removal"></div>
            <div>
              Indicates <span>a removal</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
