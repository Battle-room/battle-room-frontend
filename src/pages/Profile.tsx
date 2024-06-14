import Header from "../components/Header";
import { useDispatch, useSelector } from "react-redux";
import { useState, ChangeEvent } from "react";
import { updateUserProfilePhoto, updateUserName } from "../api/user";
import { UserStoreActions } from "../store/UserStore";
import User from "../types/User";
import '../styles/profile.css';

type RootState = {
  user: User | undefined;
};

export default function ProfilePage() {
  const user = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch();
  const [newName, setNewName] = useState(user?.username || "");
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewName(e.target.value);
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedFile(e.target.files[0]);
    }
  };

  const handleNameUpdate = async () => {
    try {
      if (newName && newName !== user?.username) {
        const updatedUser = await updateUserName(newName);
        dispatch({ type: UserStoreActions.UPDATE_USER, payload: updatedUser });
      }
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  const handleFileUpload = async () => {
    if (selectedFile) {
      try {
        const updatedUser = await updateUserProfilePhoto(selectedFile);
        dispatch({ type: UserStoreActions.UPDATE_USER, payload: updatedUser });
        window.location.reload();
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <div>
      <Header />
      <div className="profile-container">
        <div className="profile-photo">
          <img src={user?.avatar || 'default-avatar.png'} alt="Profile" />
          <input type="file" onChange={handleFileChange} />
          <button onClick={handleFileUpload}>Upload Photo</button>
        </div>
        <div className="profile-info">
          <input
            type="text"
            value={newName}
            onChange={handleNameChange}
          />
          <button onClick={handleNameUpdate}>Update Name</button>
        </div>
      </div>
    </div>
  );
}
