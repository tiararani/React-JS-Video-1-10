import Listsiswa from "./Listsiswa";

function Siswa() {

    const nama = ['Rani','Emil','Dini']

    return (
        <div className="App">
            <Listsiswa judul={nama}/>
        </div>
    );
}

export default Siswa;