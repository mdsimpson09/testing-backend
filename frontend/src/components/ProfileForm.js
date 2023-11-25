import React, { useState, useContext } from "react";
import Alert from "../common/Alert";
import PlayerApi from "../api/PlayerApi";
import UserContext from "../context/UserContext";

// eslint-disable-next-line
import useTimedMessage from "../hooks/useTimedMessage";
function ProfileForm() {
    const { currentUser, setCurrentUser } = useContext(UserContext);
    const [formData, setFormData] = useState({
      username: currentUser.username,
      first_name: currentUser.first_name,
      last_name: currentUser.last_name,
      email: currentUser.email,
      password: "",
      age: currentUser.age || "", // Assuming age is a field in your backend
      preferred_pronouns: currentUser.preferred_pronouns || "", // Assuming preferred_pronouns is a field in your backend
      zip_code: currentUser.zip_code || "", // Assuming zip_code is a field in your backend
      photo: currentUser.photo || "", // Assuming photo is a field in your backend
      top_3_games: currentUser.top_3_games || "", // Assuming top_3_games is a field in your backend
      preferred_gaming_devices: currentUser.preferred_gaming_devices || "", // Assuming preferred_gaming_devices is a field in your backend
      // Add other properties here
    });


 const [formErrors, setFormErrors] = useState([]);

  const [saveConfirmed, setSaveConfirmed] = useState(false);

  console.debug(
    "ProfileForm",
    "currentUser=",
    currentUser,
    "formData=",
    formData,
    "formErrors=",
    formErrors,
    "saveConfirmed=",
    saveConfirmed
  );

  
    /** on form submit:
     * - attempt save to backend & report any errors
     * - if successful
     *   - clear previous error messages and password
     *   - show save-confirmed message
     *   - set current user info throughout the site
     */
  
    async function handleSubmit(evt) {
        evt.preventDefault();
    
        let profileData = {
          first_name: formData.first_name,
          last_name: formData.last_name,
          email: formData.email,
          password: formData.password,
          age: formData.age,
          preferred_pronouns: formData.preferred_pronouns,
          zip_code: formData.zip_code,
          photo: formData.photo,
          top_3_games: formData.top_3_games,
          preferred_gaming_devices: formData.preferred_gaming_devices,
          // Add other properties here
        };
    
        let username = formData.username;
        let updatedUser;
    
        try {
          updatedUser = await JoblyApi.saveProfile(username, profileData);
        } catch (errors) {
          debugger;
          setFormErrors(errors);
          return;
        }
    
        setFormData((f) => ({ ...f, password: "" }));
        setFormErrors([]);
        setSaveConfirmed(true);
    
        // trigger reloading of user information throughout the site
        setCurrentUser(updatedUser);
      }
    
      /** Handle form data changing */
      function handleChange(evt) {
        const { name, value } = evt.target;
        setFormData((f) => ({
          ...f,
          [name]: value,
        }));
        setFormErrors([]);
      }
    
      return (
        <div className="col-md-6 col-lg-4 offset-md-3 offset-lg-4">
          <h3>Profile</h3>
          <div className="card">
            <div className="card-body">
              <form>
                <div className="form-group">
                  <label>Username</label>
                  <p className="form-control-plaintext">{formData.username}</p>
                </div>
                <div className="form-group">
                  <label>First Name</label>
                  <input
                    name="first_name"
                    className="form-control"
                    value={formData.first_name}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label>Last Name</label>
                  <input
                    name="last_name"
                    className="form-control"
                    value={formData.last_name}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label>Email</label>
                  <input
                    name="email"
                    className="form-control"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label>Age</label>
                  <input
                    name="age"
                    type="number"
                    className="form-control"
                    value={formData.age}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label>Preferred Pronouns</label>
                  <input
                    name="preferred_pronouns"
                    className="form-control"
                    value={formData.preferred_pronouns}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label>Zip Code</label>
                  <input
                    name="zip_code"
                    className="form-control"
                    value={formData.zip_code}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label>Photo URL</label>
                  <input
                    name="photo"
                    className="form-control"
                    value={formData.photo}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label>Top 3 Games</label>
                  <input
                    name="top_3_games"
                    className="form-control"
                    value={formData.top_3_games}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label>Preferred Gaming Devices</label>
                  <input
                    name="preferred_gaming_devices"
                    className="form-control"
                    value={formData.preferred_gaming_devices}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label>Confirm password to make changes:</label>
                  <input
                    type="password"
                    name="password"
                    className="form-control"
                    value={formData.password}
                    onChange={handleChange}
                  />
                </div>
    
                {formErrors.length ? (
                  <Alert type="danger" messages={formErrors} />
                ) : null}
    
                {saveConfirmed ? (
                  <Alert type="success" messages={["Updated successfully."]} />
                ) : null}
    
                <button
                  className="btn btn-primary btn-block mt-4"
                  onClick={handleSubmit}
                >
                  Save Changes
                </button>
              </form>
            </div>
          </div>
        </div>
      );
    }
    
    export default ProfileForm;