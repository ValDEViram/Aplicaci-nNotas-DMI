import { useEffect, useState } from "react";
import { getUsers } from "../(services)/api/api";
import {Text,View, SectionList, StyleSheet,} from "react-native";
import { UserProfileSVG } from "../../components/Icons";
import { useDispatch } from "react-redux";
import { loadUser } from "../(services)/(redux)/authSlice";

        

export default function AllUsers() {
    const dispatch = useDispatch()
    const [users, setUsers] = useState([])

    // useEffect(() => {
    //   dispatch(loadUser())
    // },[dispatch])

    useEffect(() =>{
      const fetchUsers = async() =>{
        try{
          const userData = await getUsers()
          setUsers(userData)
        }catch(error){
          console.log("Error al conseguir los datos", error)
        }
      }
      fetchUsers()
    },[])

    const sections = [
      {
        rol: 'Admins',
        data: users.filter(user => user.rol === 'Admin'), // Filtra solo los Admins
      },
      {
        rol: 'Usuarios',
        data: users.filter(user => user.rol === 'Usuario'), // Filtra solo los Usuarios
      }
    ];

    return(
      <View style={styles.container}>
        <SectionList
          sections={sections}
          keyExtractor={(item) => item._id}
          renderItem={({item}) => (
            <View style={styles.item}>
              <UserProfileSVG stroke={"#AAB396"}/>
              <View style={styles.info}>
                <Text style={styles.title}>{item.username}</Text>
                <Text style={styles.text}>{item.email}</Text>
              </View>
            </View>
          )}
          renderSectionHeader={({section: {rol}}) => (
            <Text style={styles.header}>{rol}</Text>
          )}
        />     
      </View> 
    )
 }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F4F5F0",
    padding: 10
  }, 
  header: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#301D18"
  },
  item: {
    flexDirection: "row",
    gap: 8,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderBottomWidth: 2,
    borderBlockColor: "#828282",
    marginBottom: 5,
    alignItems: "center"
  }, 
  info: {
    gap: 3
  }, 
  title: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#35392e"
  },
  text: {
    color: "#828282",
  },
})