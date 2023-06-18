// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import styles from '../styles/Form.module.css';

// const client = axios.create({
//     baseURL: "https://jsonplaceholder.typicode.com/posts"
// });

// const koneksiMahasiswa = axios.create({
//  // baseURL: "http://192.168.1.33:5000/api/mahasiswa"
//   baseURL: "http://127.0.0.1:5000/api/mahasiswa"
// });

// export default function FormMahasiswa() {
//     const [nama, setNama] = useState("");
//     const [nim, setNim] = useState("");
//     const [alamat, setAlamat] = useState("");

//     const [post, setPost] = React.useState(null);
//     const [mahasiswa, setMahasiswa] = useState(null)
//     const [editMode, setEditMode] = useState(false); // Track edit mode

//     const handleDelete = (event) => {
//         event.preventDefault();
//         var nim = event.target.value;
//         koneksiMahasiswa.delete(`/${nim}`)
//           .then(response => {
//             console.log('Data berhasil dihapus:', response.data);
//             setMahasiswa(
//               mahasiswa.filter((mahasiswa) => {
//                  return mahasiswa.nim !== nim;
//               }))

//             // Lakukan langkah-langkah lain setelah penghapusan data
//           })
//           .catch(error => {
//             console.error('Gagal menghapus data:', error);
//           })
//       }

//   const handleEdit = (event) => {
//         event.preventDefault();
//         var nim = event.target.value;

//            const mhsEdit =  mahasiswa.filter((mahasiswa) => {
//                  return mahasiswa.nim == nim;
//               });
//               if(mhsEdit!=null){

//                 setNama(mhsEdit[0].nama);
//                 setNim(mhsEdit[0].nim);
//                 setAlamat(mhsEdit[0].alamat);
//                 setTanggal(formatDate(mhsEdit[0].tanggal_lahir));
//                 setFoto(mhsEdit[0].foto);

//               }
//          //setNim(mahasiswaEdit[0].nim);
//          //alert(statenim);
//             // Lakukan langkah-langkah lain setelah penghapusan data

//       }

//     useEffect(() => {
//         async function getPost() {
//             const response = await client.get("/1");
//             setPost(response.data);
//         }
//         getPost();
//     }, []);

//     useEffect(() => {
//       async function getMahasiswa() {
//         const response = await koneksiMahasiswa.get("/").then(function (axiosResponse) {
//             setMahasiswa(axiosResponse.data.data);
//          })
//          .catch(function (error) {

//           alert('error from mahasiswa in api mahasiswa: '+error);
//          });;
//           }
//       getMahasiswa();
//     }, []);

//     if (!post) return "No post!"
//     async function deletePost() {
//         await client.delete("/1");
//         alert("Post deleted!");
//         setPost(null);
//     }

//     const handleSubmit = (event) => {
//         event.preventDefault();
//         alert(`Nama: ${nama} \n Nim: ${nim}`)
//     }

//     if(mahasiswa === null) {
//        <div>Please wait</div>
//     }else{
//         // const handleDelete = (nim) => {
//         //     // Menghapus data berdasarkan nim
//         //     const deletMahasiswa = mahasiswa.filter(item => item.nim !== nim);
//         //     setMahasiswa(deletMahasiswa); // mengupdate state setelah penghapusan data
//         //   };

//                   const handleDelete = (nim) => {
//             // Mengirim permintaan HTTP DELETE ke API
//             axios.delete(`http://127.0.0.1:5000/api/mahasiswa/${nim}`)
//               .then(response => {
//                 console.log('Data berhasil dihapus:', response.data);
//                 // Lakukan langkah-langkah lain setelah penghapusan data
//               })
//               .catch(error => {
//                 console.error('Gagal menghapus data:', error);
//                 // Lakukan penanganan kesalahan jika diperlukan
//               });
//           };

//           const handleEdit = (mhs) => {
//             setNama(mhs.nama); // Set nama state with the selected data item's nama
//             setNim(mhs.nim); // Set nim state with the selected data item's nim
//             setAlamat(mhs.alamat)
//             setEditMode(true); // Enable edit mode
//           };
// return (
//     <>
//         <form onSubmit={handleSubmit} className={styles.add}>
//             <table border={0}>
//                 <tbody>
//                     <tr>
//                         <td><label> nim:</label></td>
//                         <td><input type="text" id="nim"  value={nim} onChange={(e) => setNim(e.target.value)}  /></td>
//                     </tr>
//                     <tr>
//                         <td><label> nama:</label></td>
//                         <td><input type="text" id="nama"  value={nama} onChange={(e) => setNama(e.target.value)} /></td>
//                     </tr>
//                     <tr>
//                         <td><label> alamat:</label></td>
//                         <td><textarea  id="address" style={{resize: "none"}} /></td>
//                     </tr>
//                     <tr>
//                         <td><label> hobby:</label></td>
//                         <td><select>
//                             <option value="Musik">Musik</option>
//                             <option value="Olahraga">Olahraga</option>
//                             <option value="Membaca">Membaca</option>
//                         </select></td>
//                     </tr>
//                     <tr>
//                         <td><label> gender:</label></td>
//                         <td><input type="radio" value="Pria" name="gender"/> Pria
//                         <input type="radio" value="Wanita"  name="gender"/> Wanita
//                         <input type="radio" value="Hermaprodit"  name="gender"/> Hermaprodit</td>
//                     </tr>
//                     <tr>
//                         <td><label> Foto:</label></td>
//                         <td><input type="file" name="foto"/></td>
//                     </tr>
//                     <tr>
//                         <td><label>Tanggal Lahir</label></td>
//                         <td><input type="date" id="start" name="trip-start" value="2018-07-22"
//                             min="2018-01-01" max="2018-12-31" />
//                         </td>
//                     </tr>
//                 </tbody>
//             </table>
//             <input type="submit" />
//             <audio src="./audio/whistle.mp3" controls autoPlay/>
//         </form>
//         <form onSubmit={handleSubmit} className={styles.edit}>
//             <table border={0}>
//                 <tbody>
//                     <tr>
//                         <td><label> nim:</label></td>
//                         <td><input type="text" id="nim"  value={nim} onChange={(e) => setNim(e.target.value)}  /></td>
//                     </tr>
//                     <tr>
//                         <td><label> nama:</label></td>
//                         <td><input type="text" id="nama"  value={nama} onChange={(e) => setNama(e.target.value)} /></td>
//                     </tr>
//                     <tr>
//                         <td><label> alamat:</label></td>
//                         <td><textarea  id="address" value={alamat} onChange={(e) => setAlamat(e.target.value)} style={{resize: "none"}} /></td>
//                     </tr>
//                     <tr>
//                         <td><label> hobby:</label></td>
//                         <td><select>
//                             <option value="Musik">Musik</option>
//                             <option value="Olahraga">Olahraga</option>
//                             <option value="Membaca">Membaca</option>
//                         </select></td>
//                     </tr>
//                     <tr>
//                         <td><label> gender:</label></td>
//                         <td><input type="radio" value="Pria" name="gender"/> Pria
//                         <input type="radio" value="Wanita"  name="gender"/> Wanita
//                         <input type="radio" value="Hermaprodit"  name="gender"/> Hermaprodit</td>
//                     </tr>
//                     <tr>
//                         <td><label> Foto:</label></td>
//                         <td><input type="file" name="foto"/></td>
//                     </tr>
//                     <tr>
//                         <td><label>Tanggal Lahir</label></td>
//                         <td><input type="date" id="start" name="trip-start" value="2018-07-22"
//                             min="2018-01-01" max="2018-12-31" />
//                         </td>
//                     </tr>
//                 </tbody>
//             </table>
//             <input type="submit" />
//             <audio src="./audio/whistle.mp3" controls autoPlay/>
//         </form>
//         <table border={1}>
//             <thead>
//                 <tr><td>Nim</td>
//                 <td>Nama</td></tr>
//             </thead>
//             <tbody>
//                 <tr>
//                     <td>{nim}</td>
//                     <td>{nama}</td>
//                 </tr>
//             </tbody>
//         </table>
//         <div>
//             <h1>{post.title}</h1>
//             <p>{post.body}</p>
//             <button onClick={deletePost}>Delete Post</button>
//             <br/>
//             <br/>
//             <br/>
//             Tabel Mahasiswa hasil get Local Nodejs
//             <table border={1}>
//                 <thead>
//                     <tr>
//                         <td>Nim</td>
//                         <td>Nama</td>
//                         <td>Tanggal Lahir</td>
//                         <td>Alamat</td>
//                         <td>Foto</td>
//                         <td>Action</td>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {mahasiswa.map((mhs) => (
//                         <tr key={mhs.nim}>
//                             <td>{mhs.nim}</td>
//                             <td>{mhs.nama}</td>
//                             <td>{mhs.tanggal_lahir}</td>
//                             <td>{mhs.alamat}</td>
//                             <td><img src={mhs.foto} width={100} height={70}/></td>
//                             <td>
//                                 <button onClick={() => handleEdit(mhs)}>Edit</button>
//                                 <button onClick={() => handleDelete(mhs.nim)}>Delete</button>
//                             </td>
//                         </tr>
//                     ))}
//                 </tbody>
//             </table>
//         </div>
//     </>
//     )
//     }
//   }

// import { useState,useEffect } from "react";
// import axios from "axios";
// import { stat } from "fs";

// const koneksiMahasiswa = axios.create({
//     baseURL: "http://127.0.0.1:5000/api/mahasiswa"
// });

// export default function FormMahasiswa() {
//     const [statenama, setNama] = useState("");
//     const [statenim, setNim] = useState("");
//     const [statetanggal, setTanggal] = useState("2018-07-22");
//     const [statealamat, setAlamat] = useState("");
//     const [statefoto, setFoto] = useState("");
//     const [mahasiswa, setMahasiswa] =  useState(null);
//     const [stateadd,setAdd]=useState("hide");

//     function formatDate(date) {
//         var d = new Date(date),
//             month = '' + (d.getMonth() + 1),
//             day = '' + d.getDate(),
//             year = d.getFullYear();

//         if (month.length < 2)
//             month = '0' + month;
//         if (day.length < 2)
//             day = '0' + day;

//         return [year, month, day].join('-');
//     }

//     const handleAdd = (event) => {
//         alert(stateadd);
//         setAdd("show");
//         alert(stateadd);

//     }

//     const handleDelete = (event) => {
//         event.preventDefault();
//         var nim = event.target.value;
//         // nim nya dikirim
//         koneksiMahasiswa.delete(`/${nim}`).then(response => {
//             // responsenya berhasil
//             console.log('Data berhasil dihapus:', response.data);
//             // memfilter elemen dari mahasiswa yang telah berhasil dihapus
//             setMahasiswa(mahasiswa.filter((mahasiswa) => {
//                 return mahasiswa.nim !== nim;
//             }))
//         })
//         .catch(error => {
//             // responsenya error
//             console.error('Gagal menghapus data:', error);
//         })
//     }

//     const handleEdit = (event) => {
//         event.preventDefault();
//         var nim = event.target.value;

//         const mhsEdit =  mahasiswa.filter((mahasiswa) => {
//             return mahasiswa.nim == nim;
//         });

//         if(mhsEdit!=null) {
//             setNama(mhsEdit[0].nama);
//             setNim(mhsEdit[0].nim);
//             setAlamat(mhsEdit[0].alamat);
//             setTanggal(formatDate(mhsEdit[0].tanggal_lahir));
//             setFoto(mhsEdit[0].foto);
//         }
//     }

//     useEffect(() => {
//         async function getMahasiswa() {
//             const response = await koneksiMahasiswa.get("/").then(function (axiosResponse) {
//                 setMahasiswa(axiosResponse.data.data);
//             })
//             .catch(function (error) {
//                 alert('error from mahasiswa in api mahasiswa: '+error);
//             })
//         }
//         getMahasiswa();
//     }, []);

//     if(mahasiswa==null){
//         return(
//           <div>
//             waiting...
//           </div>
//         )
//         }else{
//             return (
//                 <div>
//                 <button id="btnadd" onClick={handleAdd} className={!stateadd}>add</button>
//                 <form id="formadd" className={stateadd}>
//                         <table border={0}>
//                             <tbody>
//                                 <tr>
//                                     <td><label> nim:</label></td>
//                                     <td><input type="text" id="nim"  value={statenim} />
//                                     {/* onChange={handleOnchangeNim}  /> */}
//                                     </td>
//                                 </tr>
//                                 <tr>
//                                     <td><label> nama:</label></td>
//                                     <td><input type="text" id="nama"  value={statenama} onChange={(e) => setNama(e.target.value)}/></td>
//                                 </tr>
//                                 <tr>
//                                     <td><label> Foto:</label></td>
//                                     <td><input type="file" name="foto"/> <img src={statefoto} width="80"/> </td>
//                                 </tr>
//                                 <tr>
//                                     <td><label> Tanggal Lahir:</label></td>
//                                     <td><input type="date" value={statetanggal} min="1970-01-01" max="2025-12-31"/></td>
//                                 </tr>
//                                 <tr>
//                                     <td><label> alamat:</label></td>
//                                     <td><textarea  id="address" style={{resize: "none"}} value={statealamat}></textarea></td>
//                                 </tr>
//                             </tbody>
//                         </table>
//                         <input type="submit" />
//                     </form>
//                     {/* FORM EDIT */}
//                     <form id="formedit">
//                         <table border={0}>
//                             <tbody>
//                                 <tr>
//                                     <td><label> nim:</label></td>
//                                     <td><input type="text" id="nim"  value={statenim} />
//                                     {/* onChange={handleOnchangeNim}  /> */}
//                                     </td>
//                                 </tr>
//                                 <tr>
//                                     <td><label> nama:</label></td>
//                                     <td><input type="text" id="nama"  value={statenama} onChange={(e) => setNama(e.target.value)}/></td>
//                                 </tr>
//                                 <tr>
//                                     <td><label> Foto:</label></td>
//                                     <td><input type="file" name="foto"/> <img src={statefoto} width="80"/> </td>
//                                 </tr>
//                                 <tr>
//                                     <td><label> Tanggal Lahir:</label></td>
//                                     <td><input type="date" value={statetanggal} min="1970-01-01" max="2025-12-31"/></td>
//                                 </tr>
//                 <tr>
//                 <td>  <label> alamat:</label></td>
//                 <td><textarea  id="address" style={{resize: "none"}} value={statealamat}></textarea></td>
//                 </tr>
//                 </tbody>
//                 </table>
//                 <input type="submit" />
//                 </form>
// <br/>
// <br/>

// Tabel Mahasiswa hasil get Local Nodejs

//    <table border={1}>
//        <thead>
//            <tr>
//              <td><b>Nim</b></td>
//            <td><b>Nama</b></td>
//            <td><b>Foto</b></td>
//            <td><b>Tanggal Lahir</b></td>
//            <td><b>Alamat</b></td>
//            <td colSpan={2}><b>Action</b></td>
//            </tr>
//        </thead>
//        <tbody>
//        {mahasiswa.map((mhs) =>
//            <tr>
//                <td>{mhs.nim}</td>
//                <td>{mhs.nama}</td>
//                <td><img src={mhs.foto} width="80"/></td>
//                <td>{mhs.tanggal_lahir}</td>
//                <td>{mhs.alamat}</td>
//               <td><button onClick={handleEdit} value={mhs.nim}>edit</button></td>
//               <td><button onClick={handleDelete} value={mhs.nim}>delete</button></td>
//            </tr>
//       )}
//               </tbody>
//      </table>

//      </div>
//    )
// }

// }

import { useState, useEffect } from 'react';
import axios from 'axios';
import { stat } from 'fs';

const koneksiMahasiswa = axios.create({
  baseURL: 'http://127.0.0.1:5000/api/mahasiswa',
});

export default function FormMahasiswa() {
  const [statenama, setNama] = useState('');
  const [statenim, setNim] = useState('');
  const [statetanggal, setTanggal] = useState('2018-07-22');
  const [statealamat, setAlamat] = useState('');
  const [statefoto, setFoto] = useState('');
  const [mahasiswa, setMahasiswa] = useState(null);
  const [stateadd, setAdd] = useState('hide');
  const [statebutonadd, setbtnAdd] = useState('show');

  const [stateedit, setEdit] = useState('hide');

  function formatDate(date) {
    var d = new Date(date),
      month = '' + (d.getMonth() + 1),
      day = '' + d.getDate(),
      year = d.getFullYear();

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;

    return [year, month, day].join('-');
  }

  const handleSubmitAdd = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    koneksiMahasiswa
      .post('/', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      .then((res) => {
        console.log(res);
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handleSubmitEdit = (event) => {
    event.preventDefault();
    const address = '/' + event.target.nim.value;
    alert(address);
    //const formData = new FormData(event.target);
    const formData = {
      nim: event.target.nim.value,
      nama: event.target.nama.value,
      alamat: event.target.alamat.value,
      tanggal_lahir: event.target.tanggal_lahir.value,
    };
    alert(formData);
    koneksiMahasiswa
      .put(address, formData)
      .then((res) => {
        console.log(res);
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handleAdd = (event) => {
    setAdd('show');
    setbtnAdd('hide');
    setEdit('hide');
  };
  const handleCancelAdd = (event) => {
    setAdd('hide');
    setbtnAdd('show');
    setEdit('hide');
  };
  const handleCancelEdit = (event) => {
    setAdd('hide');
    setbtnAdd('show');
    setEdit('hide');
    setNama('');
    setNim('');
    setAlamat('');
    setTanggal(formatDate('2018-07-22'));
    setFoto('');
  };
  const handleDelete = (event) => {
    event.preventDefault();
    var nim = event.target.value;
    koneksiMahasiswa
      .delete(`/${nim}`)
      .then((response) => {
        console.log('Data berhasil dihapus:', response.data);
        setMahasiswa(
          mahasiswa.filter((mahasiswa) => {
            return mahasiswa.nim !== nim;
          }),
        );

        // Lakukan langkah-langkah lain setelah penghapusan data
      })
      .catch((error) => {
        console.error('Gagal menghapus data:', error);
      });
  };

  const handleEdit = (event) => {
    event.preventDefault();
    var nim = event.target.value;

    const mhsEdit = mahasiswa.filter((mahasiswa) => {
      return mahasiswa.nim == nim;
    });
    if (mhsEdit != null) {
      setNama(mhsEdit[0].nama);
      setNim(mhsEdit[0].nim);
      setAlamat(mhsEdit[0].alamat);
      setTanggal(formatDate(mhsEdit[0].tanggal_lahir));
      setFoto(mhsEdit[0].foto);
      setAdd('hide');
      setbtnAdd('show');
      setEdit('show');
    }
  };
  useEffect(() => {
    async function getMahasiswa() {
      const response = await koneksiMahasiswa
        .get('/')
        .then(function (axiosResponse) {
          setMahasiswa(axiosResponse.data.data);
        })
        .catch(function (error) {
          alert('error from mahasiswa in api mahasiswa: ' + error);
        });
    }
    getMahasiswa();
  }, []);

  if (mahasiswa == null) {
    return <div>waiting...</div>;
  } else {
    return (
      <div>
        <button id="btnadd" onClick={handleAdd} className={statebutonadd}>
          add
        </button>
        <form id="formadd" className={stateadd} onSubmit={handleSubmitAdd}>
          <table border={0}>
            <tbody>
              <tr>
                <td>
                  {' '}
                  <label> nim:</label>
                </td>
                <td>
                  <input type="text" id="nim" name="nim" />
                </td>
              </tr>
              <tr>
                <td>
                  {' '}
                  <label> nama:</label>
                </td>
                <td>
                  <input type="text" id="nama" name="nama" />
                </td>
              </tr>
              <tr>
                <td>
                  {' '}
                  <label> Foto:</label>
                </td>
                <td>
                  {' '}
                  <input type="file" name="image" />{' '}
                </td>
              </tr>
              <tr>
                <td>
                  {' '}
                  <label> Tanggal Lahir:</label>
                </td>
                <td>
                  {' '}
                  <input
                    type="date"
                    name="tanggal_lahir"
                    min="1970-01-01"
                    max="2025-12-31"
                  />
                </td>
              </tr>
              <tr>
                <td>
                  {' '}
                  <label> alamat:</label>
                </td>
                <td>
                  <textarea
                    id="address"
                    style={{ resize: 'none' }}
                    name="alamat"
                  ></textarea>
                </td>
              </tr>
            </tbody>
          </table>
          <input type="submit" />
          <input type="button" value="cancel" onClick={handleCancelAdd} />
        </form>
        <form id="formedit" className={stateedit} onSubmit={handleSubmitEdit}>
          <table border={0}>
            <tbody>
              <tr>
                <td>
                  {' '}
                  <label> nim:</label>
                </td>
                <td>
                  <input type="text" id="nim" value={statenim} name="nim" />
                  {/* onChange={handleOnchangeNim}  /> */}
                </td>
              </tr>
              <tr>
                <td>
                  {' '}
                  <label> nama:</label>
                </td>
                <td>
                  <input
                    type="text"
                    id="nama"
                    value={statenama}
                    name="nama"
                    onChange={(e) => setNama(e.target.value)}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  {' '}
                  <label> Foto:</label>
                </td>
                <td>
                  {' '}
                  <img src={statefoto} width="80" />{' '}
                </td>
              </tr>
              <tr>
                <td>
                  {' '}
                  <label> Tanggal Lahir:</label>
                </td>
                <td>
                  {' '}
                  <input
                    type="date"
                    value={statetanggal}
                    name="tanggal_lahir"
                    onChange={(e) => setTanggal(e.target.value)}
                    min="1970-01-01"
                    max="2025-12-31"
                  />
                </td>
              </tr>
              <tr>
                <td>
                  {' '}
                  <label> alamat:</label>
                </td>
                <td>
                  <textarea
                    id="address"
                    style={{ resize: 'none' }}
                    value={statealamat}
                    name="alamat"
                    onChange={(e) => setAlamat(e.target.value)}
                  ></textarea>
                </td>
              </tr>
            </tbody>
          </table>
          <input type="submit" />
          <input type="button" value="cancel" onClick={handleCancelEdit} />
        </form>
        <br />
        <br />
        Tabel Mahasiswa hasil get Local Nodejs
        <table border={1}>
          <thead>
            <tr>
              <td>
                <b>Nim</b>
              </td>
              <td>
                <b>Nama</b>
              </td>
              <td>
                <b>Foto</b>
              </td>
              <td>
                <b>Tanggal Lahir</b>
              </td>
              <td>
                <b>Alamat</b>
              </td>
              <td colSpan={2}>
                <b>Action</b>
              </td>
            </tr>
          </thead>
          <tbody>
            {mahasiswa.map((mhs) => (
              <tr>
                <td>{mhs.nim}</td>
                <td>{mhs.nama}</td>
                <td>
                  <img src={mhs.foto} width="80" />
                </td>
                <td>{mhs.tanggal_lahir}</td>
                <td>{mhs.alamat}</td>
                <td>
                  <button onClick={handleEdit} value={mhs.nim}>
                    edit
                  </button>
                </td>
                <td>
                  <button onClick={handleDelete} value={mhs.nim}>
                    delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
