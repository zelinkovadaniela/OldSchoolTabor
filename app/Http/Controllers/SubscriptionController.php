<?php

namespace App\Http\Controllers;

use App\Subscription;
use Illuminate\Http\Request;

class SubscriptionController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $subscription = Subscription::all();
        return response()->json($subscription);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $subscription = new Subscription([
            'name' => $request->get('name'),
            'lastName' => $request->get('lastName'),
            'email' => $request->get('email'),
            'phone' => $request->get('phone'),
            'date-of-birth' => $request->get('dateOfBirth'),
            'address' => $request->get('address'),
            'count-of-people' => $request->get('countOfPeople'),
            'totalPrice' => $request->get('totalPrice'),
            'comment' => $request->get('comment')
        ]);
        $subscription->save();
        return response()->json('Successfully added');
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $subscription = Subscription::find($id);
        return response()->json($subscription);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $subscription = Subscription::find($id);
        $subscription->name = $request->get('name');
        $subscription->lastName = $request->get('lastName');
        $subscription->email = $request->get('email');
        $subscription->phone = $request->get('phone');
        $subscription->dateOfBirth = $request->get('dateOfBirth');
        $subscription->address = $request->get('address');
        $subscription->countOfPeople = $request->get('countOfPeople');
        $subscription->totalPrice = $request->get('totalPrice');
        $subscription->comment = $request->get('comment');
        $subscription->save();

        return response()->json('Successfully Updated');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $subscription = Subscription::find($id);
        $subscription->delete();

        return response()->json('Successfully Deleted');
    }
}