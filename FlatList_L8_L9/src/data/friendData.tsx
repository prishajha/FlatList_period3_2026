/*
This declares the datatype of data I want displayed in my 
flatlist.  The id is required so that each entry in the
list has a unique value.  The others can be anything (number, string)
*/

type friendDataType = {
  id: string;
  name: string;
  age: string;
  favActivity: string;
};

/*
Here is a preset array of friends that I am declaring here to keep it out
of the index.tsx.  I could do this if the data was declared in a diff
file, read in from a text file, or pulled in from an external data source
*/
const friends: friendDataType[] = [
  {
    id: "1",
    name: "",
    age: "",
    favActivity: "",
  },

  // add more entries in the array.  Each entry begins and ends with the { }
  // make sure each entry has a different id number
];

/* 
Because I am exporting more than one item from this file, 
I list them in { }. If I was only exporting one file I could say

export default friends;
*/
export { friendDataType, friends };
