const ProfileSettings = () => {
  return (
    <div className="profile-settings">
      <h2>Profile Settings</h2>
      <div className="settings-content">
        <div className="setting-group">
          <h3>Account Settings</h3>
          <label>
            <input type="checkbox" defaultChecked /> Enable email notifications
          </label>
          <label>
            <input type="checkbox" /> Enable two-factor authentication
          </label>
          <label>
            <input type="checkbox" defaultChecked /> Make profile public
          </label>
        </div>
        <div className="setting-group">
          <h3>Privacy Settings</h3>
          <label>
            <input type="radio" name="privacy" defaultChecked /> Public profile
          </label>
          <label>
            <input type="radio" name="privacy" /> Friends only
          </label>
          <label>
            <input type="radio" name="privacy" /> Private
          </label>
        </div>
        <button className="save-button">Save Settings</button>
      </div>
    </div>
  );
};

export default ProfileSettings;
