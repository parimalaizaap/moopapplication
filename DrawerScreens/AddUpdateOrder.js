import React, { useState,useEffect } from 'react'
import { Text, Alert,View,TextInput} from 'react-native'
import SelectBox from 'react-native-multi-selectbox'
import { xorBy } from 'lodash'
import { Dropdown } from 'react-native-material-dropdown-v2';
// Options data must contain 'item' & 'id' keys

let array = [],tableno=[];

function AddUpdateOrder({navigation}) {
  const [selectedTeam, setSelectedTeam] = useState({})
  const [selectedTeams, setSelectedTeams] = useState([])
  const [tableNo, setTableNo] = useState([])
  const [instruction, setInstructions] = useState([])
 
  const [listData, setListData] = useState([]);
  let arrayobject={};
  var special_instruction;
  useEffect(() => {                   
    //const unsubscribe = navigation.addListener('focus', () => {
      fetch('http://testweb.izaap.in/moop/api/index.php/service/menuitems/lists?X-API-KEY=MoopApp2021@!&user_id=251',{
        method: 'GET'
        //Request Type 
        })
        .then((response) => response.json())
        .then((responseJson) => {
          //console.log(responseJson);
          //console.log("response "+responseJson);
          return responseJson.data;
        })
        .then( data  => {
              
              if(data != undefined){  
                      data.map((item, index)=>{    
                        array.push({id:item.id,item:item.itemname});  
                   })       
              }
              else
              {
                console.log('No Data Found');
                Alert.alert('No Data Found');
              } 
              setListData(array);

        })
        .catch((error) => {
          console.error(error);
        });

        fetch('http://testweb.izaap.in/moop/api/index.php/service/tables/lists?X-API-KEY=MoopApp2021@!&user_id=251',{
          method: 'GET'
          //Request Type 
          })
          .then((response) => response.json())
          .then((responseJson) => {
            return responseJson.data;
          })
          .then( data  => {
            data.map((item, index)=>{    
              tableno.push({id:item.id,item:item.tablename});  
            })     
            setTableNo(tableno);  
          })
          .catch((error) => {
            console.error(error);
          });
         
},[listData,tableNo]);

return(

    <View style={{ margin: 30 }}>
      <View style={{ width: '100%', alignItems: 'center' }}>
        <Text style={{ fontSize: 30, paddingBottom: 20 }}>Table </Text>
      </View>
      <View style={{flexDirection:'row',top:20}}>
          <Text style={{fontSize:16,left:5,top:10,paddingRight:70,fontWeight:'bold'}}>
         Menu Items
          </Text>
          <SelectBox
        options={tableNo}
        value={selectedTeam}
        onChange={onChange()}
        hideInputFilter={false}
      />
        </View>
      <View style={{flexDirection:'row',top:30}}>
          <Text style={{fontSize:16,left:5,top:10,fontWeight:'bold'}}>
            Special Instructions
          </Text>
          <TextInput
              placeholder='Enter Instructions Here '
                placeholderTextColor='#303030' 
                onChangeText={text => setTextInputValue(text)}
                value={instruction}    
                style={{
                  borderWidth: 2,
                  borderRadius:10,
                  borderColor: '#000',
                  padding: 15,
                  width:150,
                  height:50,
                  left:30,
                  fontWeight:'bold',
                  fontSize:16,                  
                }}
           />
        </View>
        <View style={{flexDirection:'row',top:60}}>
          <Text style={{fontSize:16,left:5,top:10,paddingRight:70,fontWeight:'bold'}}>
         Menu Items
          </Text>
          <SelectBox
         label="Select multiple"
        options={listData}
        selectedValues={selectedTeams}
        onMultiSelect={onMultiChange()}
        onTapClose={onMultiChange()}
        isMulti
      />
        </View>
      <View style={{flexDirection:'row'}} />
     
      <View style={{flexDirection:'row',top:60}}>
          <Text style={{fontSize:16,left:5,top:10,paddingRight:70,fontWeight:'bold'}}  onPress = {addOrder()}>
         Add Order
          </Text>
        </View>
      <View style={{flexDirection:'row'}} />
    </View>
  
)
 
  

  function onMultiChange() {
    return (item) => setSelectedTeams(xorBy(selectedTeams, [item], 'id'))
  }

  function onChange() {
    return (val) => setSelectedTeam(val)
  }

  function addOrder(){
    console.log("mlterms "+selectedTeams);
    console.log("singleterms "+selectedTeam);
    console.log("instn "+instruction);
    selectedTeams.map((item, index)=>{    
      console.log(item); 
 })    
   // console.log("instrcn "+instruction);
    
    //console.log("Operation", this.oper)
  // if(this.oper === "add")
   // {
      //  console.log("Add Operation")
        var dataToSend = {
          user_id:'251',
          rest_id:'3',
          table_id:selectedTeam,
          seats:'3',
          menujson:selectedTeams,
          paymentjson:[{}],
          amount:'500',
          paymentmode:'Apple',
          status:"",
          transactionid:'1',
          transactiontag:'1',
          comments:"",
          orderjson:[{}],
          orderfee :'100',
          special_instruction:instruction,
          tip_amount:10,    
        };
        var formBody = [];
        for (var key in dataToSend) {
          var encodedKey = encodeURIComponent(key);
          var encodedValue = encodeURIComponent(dataToSend[key]);
          formBody.push(encodedKey + '=' + encodedValue);
        }
        formBody = formBody.join('&');
      
        fetch('http://testweb.izaap.in/moop/api/index.php/service/orders/place?X-API-KEY=MoopApp2021@!', {
          method: 'POST',
          body: formBody,
          headers: {
            //Header Defination
            'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
          },
        })
          .then((response) => response.json())
          .then((responseJson) => {
            //Hide Loader
            //setLoading(false);
            console.log(responseJson);
            // If server response message same as Data Matched
            if (responseJson.status == "success") {
              Alert.alert('Order has been placed successfully');
              console.log('Order has been placed successfully');
              this.props.navigation.navigate('orderScreenStack',{Screen:'orderScreen'})
            } else {
              setErrortext('Error');
            }
          })
          .catch((error) => {
            //Hide Loader
            //setLoading(false);
            console.error(error);
          });
   /*  }
    else{
      console.log("Update Operation")
  
      console.log("OrderId -", this.state.order_id)
      var dataToSend = {
        user_id:'251',
        rest_id:'3',
        table_id:this.state.table_id,
        seats:'3',
        menujson:[{}],
        paymentjson:[{}],
        amount:'500',
        paymentmode:'Apple',
        status:this.state.PickerValueHolder,
        transactionid:'1',
        transactiontag:'1',
        comments:this.state.comments_txt,
        orderjson:[{}],
        orderfee :'100',
        special_instruction:this.state.special_instruction,
        tip_amount:10,  
        order_id:this.state.order_id  
      };
      var formBody = [];
      for (var key in dataToSend) {
        var encodedKey = encodeURIComponent(key);
        var encodedValue = encodeURIComponent(dataToSend[key]);
        formBody.push(encodedKey + '=' + encodedValue);
      }
      formBody = formBody.join('&');
    
      fetch('http://testweb.izaap.in/moop/api/index.php/service/orders/place?X-API-KEY=MoopApp2021@!', {
        method: 'POST',
        body: formBody,
        headers: {
          //Header Defination
          'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
        },
      })
        .then((response) => response.json())
        .then((responseJson) => {
          //Hide Loader
          //setLoading(false);
          console.log(responseJson);
          // If server response message same as Data Matched
          if (responseJson.status == "success") {
            Alert.alert('Order has been Updated successfully');
            console.log('Order has been Updated successfully');
            this.props.navigation.navigate('orderScreenStack',{Screen:'orderScreen'})
          } else {
            setErrortext('Error');
          }
        })
        .catch((error) => {
          //Hide Loader
          //setLoading(false);
          console.error(error);
        });
    }*/
    
  }
  
}

export default AddUpdateOrder;
