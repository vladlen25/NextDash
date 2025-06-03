"use client";
import { columns } from "./columns";
import { DataTable } from "./data-table";
import {useUserContext} from "@/context/UserContext";



const PaymentsPage =  () => {
    const {users} = useUserContext()
    return (
        <div className="mb-8">
            <div className="mb-8 px-4 py-2 bg-secondary rounded-md">
                <h1 className="font-semibold">All Payments</h1>
            </div>
            <DataTable columns={columns} data={users}/>
        </div>
    );
};

export default PaymentsPage;