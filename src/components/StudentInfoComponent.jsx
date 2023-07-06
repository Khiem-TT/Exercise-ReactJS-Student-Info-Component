import "../App.css";

function StudentInfoComponent() {
    const students = [
        {
            id: 1,
            name: "Nguyễn Văn A",
            age: 30,
            address: "Hà Nội"
        },
        {
            id: 2,
            name: "Trần Văn B",
            age: 30,
            address: "Hà Nội"
        },
        {
            id: 3,
            name: "Lê Thị C",
            age: 30,
            address: "Hà Nội"
        },
    ]
    return (
        <>
            <h1>List of Students</h1>
            <table>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Address</th>
                </tr>
                {students.map(student => (
                    <tr>
                        <td>{student.id}</td>
                        <td>{student.name}</td>
                        <td>{student.age}</td>
                        <td>{student.address}</td>
                    </tr>
                ))}
            </table>
        </>
    )
}

export default StudentInfoComponent;