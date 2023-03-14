import "./admin-panel.styles.css";
import AdminCard from "../admin-card/admin-card.component";
import Modal from "../modal/modal.component";
import CreateUserForm from "../create-user/create-user.component";

const AdminPanel = () => {
  return (
    <div className="admin-panel-container">
      <Modal>
        <CreateUserForm />
      </Modal>
      <AdminCard>Add User</AdminCard>
      <AdminCard>Make Admin</AdminCard>
      <AdminCard>Delete User</AdminCard>
    </div>
  );
};

export default AdminPanel;
