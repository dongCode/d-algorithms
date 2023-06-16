//
//  ContentView.swift
//  ToDO
//
//  Created by 众丞科技 on 2023/6/16.
//

import SwiftUI


struct ToDoItem: Identifiable {
  let id    = UUID()
  var isOn  = true
  let name: String
}

class ToDoViewModel: ObservableObject {
    @Published private(set) var todoList: [ToDoItem]
    
    init() {
        self.todoList = [
            ToDoItem(name: "Apple"),
            ToDoItem(name: "Pear"),
            ToDoItem(name: "Tomato")
        ]
    }
    
    func append(item: ToDoItem) {
        todoList.append(item)
    }
    
    func toggle(item: ToDoItem) {
        if let index = todoList.firstIndex(where: {$0.id == item.id}) {
            todoList[index].isOn.toggle()
        }
    }
    
    func remove(item: ToDoItem) {
        if let index = todoList.firstIndex(where: {$0.id == item.id}) {
            todoList.remove(at: index)
        }
    }
}

struct ContentView: View {
    @StateObject private var viewModel = ToDoViewModel()

    
    @State private var newName: String = ""
    
    var body: some View {
        VStack {
            
            HStack {
                TextField("input", text: $newName)
                Button("确认") {
                    if !newName.isEmpty {
                        let newItem = ToDoItem(name: newName)
                        viewModel.append(item: newItem)
                        newName = ""
                    }
                  
                }
            }
            .padding()
            
            
            List {
                ForEach(viewModel.todoList) {
                    item in HStack{
                         
                            Text(item.name).foregroundColor(item.isOn ? .primary : .gray)
                            
                            Spacer()
                        
                        Group {
                            if item.isOn {
                                Image(systemName: "circle")
                            } else {
                                Image(systemName: "checkmark.circle.fill")
                            }
                        }
                        .foregroundColor(.blue)
                        .onTapGesture {
                            viewModel.toggle(item: item)
                        }
                        
                        Button(action: {
                            viewModel.remove(item: item)
                        }) {
                            Image(systemName: "trash")
                        }
                        .foregroundColor(.red)
                        
                    }
                }
            }
        }
      
      
    }
}

struct ContentView_Previews: PreviewProvider {
    static var previews: some View {
        ContentView()
    }
}
