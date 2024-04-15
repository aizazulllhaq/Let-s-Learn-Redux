import { useAddAccountMutation, useDeleteAccountMutation, useGetUserAccountsQuery, useUpdateAccountMutation } from "../Api/adminSlice";

const Admin = () => {
    const { data, error, isLoading, isSuccess } = useGetUserAccountsQuery();

    console.log("Data:", data);
    console.log("Error:", error);
    console.log("Loading:", isLoading);

    const [addAccount] = useAddAccountMutation();
    const [deleteAccount] = useDeleteAccountMutation();
    const [updateAccount] = useUpdateAccountMutation();

    return (
        <>
            <h1>Admin Component</h1>
            {isLoading && <p>Loading...</p>}
            {error && <p>Error: {error.message}</p>}
            {isSuccess && data && data.map((acc) => <p key={acc.id}>{acc.id} : {acc.amount}
                <button onClick={() => deleteAccount(acc.id)}>Delete Account</button>
                <button onClick={() => updateAccount({ id: acc.id, amount: 802 })}>Update Account</button>
            </p>)}

            <button onClick={() => addAccount(420, data.length + 1)}>Add Account</button>
        </>
    );
}

export default Admin;
